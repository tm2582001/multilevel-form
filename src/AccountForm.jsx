import FormWrapper from "./FormWrapper";

const AccountForm = ({ email, password, updateField }) => {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateField({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateField({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
