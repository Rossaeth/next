'use client';
import { useEffect } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import WaitlistForm from '../components/WaitlistForm';
import SwapComponent from '../components/SwapComponent';
import BridgeComponent from '../components/BridgeComponent';

export default function HomePage() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black p-6 gap-6">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white">
        Mini App Farcaster / Base
      </h1>
      <WaitlistForm />
      <SwapComponent />
      <BridgeComponent />
    </div>
  );
}
