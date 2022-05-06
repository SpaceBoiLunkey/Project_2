import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';



export default function Test() {
    const ACCOUNT_API_BASE_URL = 'http://localhost:8080/api/v1/accounts';

    useEffect(() => {
        return Axios.getAccounts(ACCOUNT_API_BASE_URL);
        });
    });


  return <div>test</div>;
}
