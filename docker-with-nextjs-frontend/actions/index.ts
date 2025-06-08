import { CreateUserResponse } from '@/types/create-user';

export async function createUser(
  prevState: CreateUserResponse,
  formData: FormData,
): Promise<CreateUserResponse> {
  const { apiUrl } = prevState;

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const image = formData.get('image') as File | null;

  if (!email || !password) {
    return { message: 'Email and password are required', apiUrl };
  }

  const newFormData = new FormData();
  newFormData.append('data', JSON.stringify({ email, password }));

  if (image) {
    newFormData.append('image', image);
  }

  try {
    const response = await fetch(`${apiUrl}/users/create-user`, {
      method: 'POST',
      body: newFormData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { message: errorData.message || 'An error occurred', apiUrl };
    }

    const data = await response.json();
    return { message: data.message, apiUrl };
  } catch (error) {
    console.log(error, 'Error creating user');
    return {
      message:
        error instanceof Error ? error.message : 'Unknown error occurred',
      apiUrl,
    };
  }
}
