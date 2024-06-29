"use client";
import React from "react";

import GetSession from '@/atoms/library/getSession';

import Related from '@/components/Related';
import AuthContent from '@/components/routes/components/Auth';
import UnAuthContext from '@/components/routes/components/Unauth';
import Min from "@/components/routes/layouts/Min";


const Layout = ({ components, slug }) => {

    const { status, session, loading } = GetSession();

    if (loading) {
        return (
            <div className=" mx-auto mt-10 max-w-[90%] py-20 flex items-center justify-center">
                <div className="loader"></div>
            </div>
        );
    }

    if (status === "authenticated") {
        return (
            <>
                <AuthContent components={components} />
                <Related components={components} slug={slug} />
                <Min />
            </>
        )
    }

    return (
        <UnAuthContext components={components} />
    );
};

export default Layout;
