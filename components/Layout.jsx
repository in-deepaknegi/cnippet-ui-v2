"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

import Related from '@/components/Related';
import AuthContent from '@/components/routes/components/Auth';
import UnAuthContext from '@/components/routes/components/Unauth';

import GetSession from '@/atoms/library/getSession';

const Layout = ({ components, slug }) => {

    const { status, session, loading } = GetSession();

    if (loading) {
        return (
            <div className=" mt-10 max-w-4xl">
                <span className="text-xl">Loading ...</span>
            </div>
        );
    }

    if (status === "authenticated") {
        return (
            <>
                <AuthContent components={components} />
                <Related components={components}  slug={slug}/>
            </>
        )
    }

    return (
        <UnAuthContext components={components} />
    );
};

export default Layout;
