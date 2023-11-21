import type { NextPage } from 'next';
import styled from 'styled-components';
import { PageLayout, MagicLink, PersonBlock, Footer } from '@/components/index';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { sand } from '@radix-ui/colors';
import { persons, PersonType } from '@/lib/data';

interface AdminProps {}

const Admin: NextPage<AdminProps> = ({ }) => {
    const router = useRouter();
  const [fullname, setFullname] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState('');

  const [error, setError] = useState('');

  const handleAddMember = async () => {
    //create json 
    //add to the data json 
  };
    return (
        <>
          <PageLayout
            pageMetaProps={{
              title: 'COE `23',
              description: '',
            }}
          >
        <Wrappper>
        <div className="min-h-screen flex  justify-center px-100">
          <div className="max-w-md w-full p-6 rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Fullname:</label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Quote:</label>
              <input
                type="text"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">LinkedIn:</label>
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setQuote(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              onClick={handleAddMember}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Add Member
            </button>
          </div>
        </div>
        </Wrappper>
          </PageLayout>
          </>
      );
    };
    
    export default Admin;
    const Wrappper = styled.main`
      .about {
        padding-top: 60px;
        .name {
          font-size: 25px;
          font-weight: 600;
          color: ${sand.sand5};
        }
    
        p {
          color: ${sand.sand9};
          font-size: 18px;
          line-height: 1.5;
          font-weight: 500;
        }
    
        em {
          text-decoration: none;
          font-style: normal;
          color: ${sand.sand4};
          font-size: 18px;
        }
      }
    
      .experiments,
      .writing {
        padding-top: 50px;
    
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
          gap: 10px;
        }
      }
    
      .section-header {
        color: ${sand.sand9};
        font-size: 18px;
        cursor: pointer;
        font-weight: 600;
    
        @media (max-width: 720px) {
          color: ${sand.sand7};
          font-size: 20px;
        }
      }
    `;
