import del from 'del';

export const reset = async () => {
  await del(app.path.clean);
};
