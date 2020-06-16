import { NextPage } from "next";
import React, { useState } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { CommonPageProps } from "../../components/types";
import useNotification, {
    NotificationHook,
} from "../../components/useNotification";
import { useRouter } from "next/router";
import { processWithLoading } from "../../components/utilts";

interface LogoutResponse {
    error: null | string;
}

async function logout(
    notify: NotificationHook["show"],
    navigate: () => void
): Promise<void> {
    try {
        const res: LogoutResponse = await (
            await fetch(`${process.env.NEXT_PUBLIC_LOGOUT_URL}`, {
                method: "POST",
                credentials: "include",
            })
        ).json();

        if (res.error) throw new Error(res.error);
        navigate();
    } catch (e) {
        notify(e instanceof Error ? e.message : e, {
            variant: "error",
        });
    }
}

const Dashboard: NextPage<CommonPageProps> = () => {
    const { show } = useNotification();
    const { push } = useRouter();
    const [loading, setLoading] = useState(false);
    return (
        <Button
            onClick={() => {
                processWithLoading(
                    logout(show, () => push("/")),
                    setLoading
                );
            }}>
            {loading ? <CircularProgress /> : `Click me`}
        </Button>
    );
};

export default Dashboard;
