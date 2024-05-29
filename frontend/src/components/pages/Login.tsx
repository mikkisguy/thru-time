import { useTranslation } from "react-i18next";
import { Button, ContentBox, Input, Label } from "../shared/Styled";
import styled from "styled-components";
import { useState } from "react";

const Login = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main>
      <LoginHeader>{t("login.title")}</LoginHeader>
      <LoginBox>
        <form onSubmit={(e) => handleLogin(e)}>
          <Label htmlFor="username">{t("login.username")}</Label>
          <Input
            type="text"
            id="username"
            name="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Label htmlFor="password">{t("login.password")}</Label>
          <Input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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

  @media only screen and (max-width: ${({ theme }) => theme.bp.small}) {
    width: 100%;
  }
`;
