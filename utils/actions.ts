'use server';

export const appIdAction = async (formData: any) => {
  console.log(formData.get('id'));
};
