// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { PageLayout, Wrapper } from '@/components/index';

import { sand } from '@radix-ui/colors';
import { persons, PersonType } from '@/lib/data';
const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (username === 'admin' && password === 'password') {
      router.push('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <PageLayout
        pageMetaProps={{
          title: 'COE `23',
          description: '',
        }}
      >
    <Wrapper>
    <div className="min-h-screen flex  justify-center px-100">
      <div className="max-w-md w-full p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Login
        </button>
      </div>
    </div>
    </Wrapper>
      </PageLayout>
      </>
  );
};

export default Login;
