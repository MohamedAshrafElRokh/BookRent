"use client";
import React, { useEffect } from "react";
import Modal from "./Modal";
import {
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, onClose, router]);
  return (
    <div>
      <Modal
        title="Welcome Back"
        desciption="Login"
        isOpen={isOpen}
        onChange={onChange}
      >
        <Auth
          magicLink
          supabaseClient={supabaseClient}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "black",
                  brandAccent: "green",
                },
              },
            },
          }}
          providers={["google"]}
          theme="dark"
        />
      </Modal>
    </div>
  );
};

export default AuthModal;
