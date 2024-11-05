/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

// Define types for modal configurations
type ModalType = 'success' | 'error' | 'warning' | 'info';

interface BaseConfig {
  confirmButtonColor: string;
  cancelButtonColor: string;
  timer: number;
  icon: ModalType;
  background: string;
  iconColor: string;
}

interface PromptOptions {
    title: string;
    label?: string;
    placeholder?: string;
    confirmText?: string;
    cancelText?: string;
    defaultValue?: string;
    validationMessage?: string;
    isRequired?: boolean;
    inputType?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea';
  }


interface ModalConfig extends BaseConfig {
  color?: string;
}

const defaultConfig: Omit<BaseConfig, 'icon' | 'background' | 'iconColor'> = {
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  timer: 3000,
};

const modalConfig: Record<ModalType, ModalConfig> = {
  success: {
    ...defaultConfig,
    icon: 'success',
    background: '#fff',
    iconColor: '#4ade80',
  },
  error: {
    ...defaultConfig,
    icon: 'error',
    background: '#fff',
    iconColor: '#ef4444',
  },
  warning: {
    ...defaultConfig,
    icon: 'warning',
    background: '#fff',
    iconColor: '#eab308',
  },
  info: {
    ...defaultConfig,
    icon: 'info',
    background: '#fff',
    iconColor: '#3b82f6',
  },
};

const darkModeConfig: Record<ModalType, ModalConfig> = {
  success: {
    ...modalConfig.success,
    background: '#1f2937',
    color: '#fff',
  },
  error: {
    ...modalConfig.error,
    background: '#1f2937',
    color: '#fff',
  },
  warning: {
    ...modalConfig.warning,
    background: '#1f2937',
    color: '#fff',
  },
  info: {
    ...modalConfig.info,
    background: '#1f2937',
    color: '#fff',
  },
};

interface CustomModalOptions {
  title: string;
  message?: string;
  icon?: ModalType;
  showConfirmButton?: boolean;
  timer?: number;
  position?: 'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end';
}

class NotificationService {
  private isDarkMode: boolean;
  private observer: MutationObserver;

  constructor() {
    this.isDarkMode = document.documentElement.classList.contains('dark');
    
    this.observer = new MutationObserver(() => {
      this.isDarkMode = document.documentElement.classList.contains('dark');
    });
    
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  private getConfig(type: ModalType): ModalConfig {
    return this.isDarkMode ? darkModeConfig[type] : modalConfig[type];
  }

   
  success(title: string, message?: string): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title,
      text: message,
      ...this.getConfig('success'),
      showConfirmButton: false,
    });
  }

   
  error(title: string, message?: string): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title,
      text: message,
      ...this.getConfig('error'),
      showConfirmButton: false,
    });
  }

   
  warning(title: string, message?: string): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title,
      text: message,
      ...this.getConfig('warning'),
      showConfirmButton: true,
    });
  }

  info(title: string, message?: string): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title,
      text: message,
      ...this.getConfig('info'),
      showConfirmButton: false,
    });
  }

  async confirm(
    title: string,
    message: string,
    confirmText: string = 'Yes',
    cancelText: string = 'No'
  ): Promise<boolean> {
    const result = await Swal.fire({
      title,
      text: message,
      ...this.getConfig('warning'),
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
    });

    return result.isConfirmed;
  }

  custom(options: CustomModalOptions): Promise<SweetAlertResult<any>> {
    const { title, message, icon = 'info', showConfirmButton = true, timer, position = 'center' } = options;
    
    return Swal.fire({
      title,
      text: message,
      ...this.getConfig(icon),
      showConfirmButton,
      timer,
      position,
    });
  }


  async prompt({
    title,
    label = '',
    placeholder = '',
    confirmText = 'Submit',
    cancelText = 'Cancel',
    defaultValue = '',
    validationMessage = 'This field is required',
    isRequired = true,
    inputType = 'text'
  }: PromptOptions): Promise<string | null> {
    // Get base config but omit the timer
    const baseConfig = this.getConfig('info');
    const {  ...configWithoutTimer } = baseConfig;

    const result = await Swal.fire({
      ...configWithoutTimer,
      title,
      input: inputType,
      inputLabel: label,
      inputPlaceholder: placeholder,
      inputValue: defaultValue,
      inputAttributes: {
        required: isRequired ? 'true' : 'false',
      },
      inputValidator: (value) => {
        if (isRequired && !value) {
          return validationMessage;
        }
        return null;
      },
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      background: this.isDarkMode ? '#1f2937' : '#fff',
      color: this.isDarkMode ? '#fff' : '#000',
      // Explicitly set timer to undefined to prevent auto-closing
      timer: undefined,
      // Prevent clicking outside to close the modal
      allowOutsideClick: false
    } as SweetAlertOptions);

    return result.isConfirmed ? result.value : null;
  }

  destroy(): void {
    this.observer.disconnect();
  }
}

export const notify = new NotificationService();