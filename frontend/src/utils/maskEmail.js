const maskEmail = email => {
  const [local, domain] = email.split('@');
  const maskLocal = `${local[0]}******${local[local.length - 1]}`;
  return `${maskLocal}@${domain}`;
};

export default maskEmail