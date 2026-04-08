"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
    targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const calculateTimeLeft = () => {
            const difference = new Date(targetDate).getTime() - new Date().getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Prevent hydration mismatch by not rendering until mounted
    if (!isMounted) return null;

    return (
        <div className="flex gap-2 text-center items-center justify-center">
            <div className="bg-primary/10 text-primary font-bold rounded-lg p-2 min-w-[3rem]">
                <div className="text-xl leading-none">{timeLeft.days}</div>
                <div className="text-[10px] uppercase tracking-wider mt-1 opacity-80">Dias</div>
            </div>
            <span className="text-primary font-bold animate-pulse">:</span>
            <div className="bg-primary/10 text-primary font-bold rounded-lg p-2 min-w-[3rem]">
                <div className="text-xl leading-none">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-[10px] uppercase tracking-wider mt-1 opacity-80">Hrs</div>
            </div>
            <span className="text-primary font-bold animate-pulse">:</span>
            <div className="bg-primary/10 text-primary font-bold rounded-lg p-2 min-w-[3rem]">
                <div className="text-xl leading-none">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="text-[10px] uppercase tracking-wider mt-1 opacity-80">Min</div>
            </div>
            <span className="text-primary font-bold animate-pulse">:</span>
            <div className="bg-primary/10 text-primary font-bold rounded-lg p-2 min-w-[3rem]">
                <div className="text-xl leading-none">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="text-[10px] uppercase tracking-wider mt-1 opacity-80">Seg</div>
            </div>
        </div>
    );
}
