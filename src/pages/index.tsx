import React, { ReactElement } from 'react';
import { NextPage } from 'next';

type UserAgentType = {
  userAgent: string;
}

const Home: NextPage<UserAgentType> = ({ userAgent }: UserAgentType): ReactElement => (
  <h1>
    Hello world! - user agent:
    {userAgent}
  </h1>
);

Home.getInitialProps = async ({ req }): Promise<UserAgentType> => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
