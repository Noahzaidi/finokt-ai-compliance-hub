import { ConsentTexts, Language } from '@/types/consent';

export const consentTexts: Record<Language, ConsentTexts> = {
  en: {
    banner: {
      title: 'We use cookies',
      description: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
      customize: 'Customize',
      privacyPolicy: 'Privacy Policy'
    },
    modal: {
      title: 'Cookie Settings',
      description: 'Choose which cookies you want to accept. You can change these settings at any time.',
      categories: {
        'strictly-necessary': {
          title: 'Strictly Necessary',
          description: 'These cookies are essential for the website to function and cannot be disabled.'
        },
        preferences: {
          title: 'Preferences',
          description: 'These cookies allow us to remember your choices and provide enhanced features.'
        },
        analytics: {
          title: 'Analytics',
          description: 'These cookies help us understand how visitors interact with our website.'
        },
        marketing: {
          title: 'Marketing',
          description: 'These cookies are used to deliver personalized advertisements and measure their effectiveness.'
        }
      },
      save: 'Save Choices',
      cancel: 'Cancel',
      withdraw: 'Withdraw Consent'
    }
  },
  es: {
    banner: {
      title: 'Usamos cookies',
      description: 'Utilizamos cookies para mejorar su experiencia de navegación, servir contenido personalizado y analizar nuestro tráfico. Al hacer clic en "Aceptar Todas", acepta nuestro uso de cookies.',
      acceptAll: 'Aceptar Todas',
      rejectAll: 'Rechazar Todas',
      customize: 'Personalizar',
      privacyPolicy: 'Política de Privacidad'
    },
    modal: {
      title: 'Configuración de Cookies',
      description: 'Elija qué cookies desea aceptar. Puede cambiar estas configuraciones en cualquier momento.',
      categories: {
        'strictly-necessary': {
          title: 'Estrictamente Necesarias',
          description: 'Estas cookies son esenciales para que el sitio web funcione y no se pueden desactivar.'
        },
        preferences: {
          title: 'Preferencias',
          description: 'Estas cookies nos permiten recordar sus elecciones y proporcionar funciones mejoradas.'
        },
        analytics: {
          title: 'Análisis',
          description: 'Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.'
        },
        marketing: {
          title: 'Marketing',
          description: 'Estas cookies se utilizan para entregar publicidad personalizada y medir su efectividad.'
        }
      },
      save: 'Guardar Opciones',
      cancel: 'Cancelar',
      withdraw: 'Retirar Consentimiento'
    }
  }
};