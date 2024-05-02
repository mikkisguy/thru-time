import { useTranslation } from "react-i18next";
import { Button, ContentBox, Input, Label } from "../shared/Styled";
import styled from "styled-components";

const Login = () => {
  const { t } = useTranslation();

  return (
    <main>
      <LoginHeader>{t("login.title")}</LoginHeader>
      <LoginBox>
        <form>
          <Label htmlFor="username">{t("login.username")}</Label>
          <Input type="text" id="username" name="username" autoComplete="username" required />
          <Label htmlFor="password">{t("login.password")}</Label>
          <Input type="password" id="password" name="password" autoComplete="current-password" required />
          <Button type="submit">{t("login.button")}</Button>
        </form>
      </LoginBox>
    </main>
  );
};

export default Login;

const LoginHeader = styled.h2`
  text-align: center;
`;

const LoginBox = styled(ContentBox)`
  width: 30rem;
  margin: 0 auto;
`;
