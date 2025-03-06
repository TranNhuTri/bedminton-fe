type ToastType = 'success' | 'error';

type Props = {
  title?: string;
  message: string;
  type: ToastType;
};

export function useToast() {
  const { t } = useI18n();

  function toast({ title, message, type }: Props) {
    const toastTitle = title || t(`toast.title.${type}`);

    return ElNotification({
      title: toastTitle,
      message,
      type,
    });
  }

  function success(message: string) {
    return toast({ message, type: 'success' });
  }

  function error(message: string) {
    return toast({ message, type: 'error' });
  }

  return {
    success,
    error,
  };
}
