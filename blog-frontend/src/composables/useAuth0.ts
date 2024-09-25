import { ref, reactive, provide, inject, InjectionKey } from 'vue';
import createAuth0Client, { Auth0Client, Auth0ClientOptions } from '@auth0/auth0-spa-js';

interface Auth0ProviderState {
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  popupOpen: boolean;
  error: any;
}

interface Auth0ProviderMethods {
  loginWithPopup: (o?: any) => Promise<void>;
  handleRedirectCallback: () => Promise<void>;
  loginWithRedirect: (o?: any) => Promise<void>;
  getIdTokenClaims: (o?: any) => Promise<any>;
  getTokenSilently: (o?: any) => Promise<any>;
  getTokenWithPopup: (o?: any) => Promise<any>;
  logout: (o?: any) => void;
}

type Auth0Context = Auth0ProviderState & Auth0ProviderMethods;

const Auth0Key: InjectionKey<Auth0Context> = Symbol();

export const useAuth0 = () => {
  const auth0Client = ref<Auth0Client | null>(null);
  const state = reactive<Auth0ProviderState>({
    isAuthenticated: false,
    user: null,
    loading: true,
    popupOpen: false,
    error: null,
  });

  const methods: Auth0ProviderMethods = {
    async loginWithPopup(o) {
      state.popupOpen = true;
      try {
        await auth0Client.value?.loginWithPopup(o);
      } catch (e) {
        console.error(e);
      } finally {
        state.popupOpen = false;
      }
      state.user = await auth0Client.value?.getUser();
      state.isAuthenticated = await auth0Client.value?.isAuthenticated() || false;
    },
    async handleRedirectCallback() {
      state.loading = true;
      try {
        await auth0Client.value?.handleRedirectCallback();
        state.user = await auth0Client.value?.getUser();
        state.isAuthenticated = true;
      } catch (e) {
        state.error = e;
      } finally {
        state.loading = false;
      }
    },
    loginWithRedirect(o) {
      return auth0Client.value?.loginWithRedirect(o);
    },
    getIdTokenClaims(o) {
      return auth0Client.value?.getIdTokenClaims(o);
    },
    getTokenSilently(o) {
      return auth0Client.value?.getTokenSilently(o);
    },
    getTokenWithPopup(o) {
      return auth0Client.value?.getTokenWithPopup(o);
    },
    logout(o) {
      return auth0Client.value?.logout(o);
    },
  };

  const initAuth0 = async (options: Auth0ClientOptions) => {
    auth0Client.value = await createAuth0Client({
      ...options,
      redirect_uri: window.location.origin,
    });

    try {
      if (
        window.location.search.includes('code=') &&
        window.location.search.includes('state=')
      ) {
        const { appState } = await auth0Client.value.handleRedirectCallback();
        // Navigate to the URL stored in appState or to the root
        // router.push(appState && appState.targetUrl ? appState.targetUrl : '/');
      }
    } catch (e) {
      state.error = e;
    } finally {
      state.isAuthenticated = await auth0Client.value.isAuthenticated();
      state.user = await auth0Client.value.getUser();
      state.loading = false;
    }
  };

  const provideAuth0 = (options: Auth0ClientOptions) => {
    initAuth0(options);
    provide(Auth0Key, {
      ...state,
      ...methods,
    });
  };

  const useAuth0Context = () => {
    const context = inject(Auth0Key);
    if (!context) {
      throw new Error('useAuth0 must be used within an Auth0Provider');
    }
    return context;
  };

  return {
    provideAuth0,
    useAuth0Context,
  };
};
