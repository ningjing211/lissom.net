'use client';

import '@/app/ui/ideas/number_shows.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export default function NumberShows() {
    return (
        <div className="count-section">
            <div>
                <link
                    href="https://fonts.googleapis.com"
                    rel="preconnect"
                />
                <link
                    crossOrigin=""
                    href="https://fonts.gstatic.com"
                    rel="preconnect"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <section className="cards">
                    <div className="container">
                        <div className="drop">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                        </svg>

                            <CountUp
                                start={0}
                                end={166}
                                duration={90}
                                separator=" "
                                decimals={0}
                                decimal=","
                                prefix="照料著 "
                                suffix=" 個專案"
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => {
                                    useEffect(() => {
                                        start();
                                    }, []);
                                    return (
                                        <div className="count-piece">
                                            <span ref={countUpRef} />
                                        </div>
                                    );
                                }}
                            </CountUp>

                            <p>在土地上播下種子</p>
                            <p>純真的意念與目標</p>
                        </div>

                        <div className="drop">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                        </svg>


                            <CountUp
                                start={0}
                                end={365}
                                duration={90}
                                separator=" "
                                decimals={0}
                                decimal=","
                                prefix="燃起 "
                                suffix=" 個日子"
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => {
                                    useEffect(() => {
                                        start();
                                    }, []);
                                    return (
                                        <div className="count-piece">
                                            <span ref={countUpRef} />
                                        </div>
                                    );
                                }}
                            </CountUp>

                            <p>清潔梳理日常的細節。</p>
                            <p>照顧空間與人的需要</p>
                        </div>

                        <div className="drop">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                            </svg>

                            <CountUp
                                start={0}
                                end={9366}
                                duration={90}
                                delay={2}
                                separator=" "
                                decimals={0}
                                decimal=","
                                suffix=" 人感到振奮"
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => {
                                    useEffect(() => {
                                        start();
                                    }, []);
                                    return (
                                        <div className="count-piece">
                                            <span ref={countUpRef} />
                                        </div>
                                    );
                                }}
                            </CountUp>

                            <p>學習理性和感性，</p>
                                <p>才又想起這個回憶。</p>
                        </div>
                        
                        <div className="count-group">
                            <div className="icon-word">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                            </svg>


                            </div>     
                            <div className="count-item">
                                <CountUp
                                    start={0}
                                    end={770}
                                    duration={90}
                                    delay={2}
                                    separator=" "
                                    decimals={0}
                                    decimal=","
                                    prefix="總共鼓舞了 "
                                    suffix=" 個靈魂"
                                    onEnd={() => console.log('Ended! 👏')}
                                    onStart={() => console.log('Started! 💨')}
                                >
                                    {({ countUpRef, start }) => {
                                        useEffect(() => {
                                            start();
                                        }, []);
                                        return (
                                            <div className="count-piece">
                                                <span ref={countUpRef} />
                                            </div>
                                        );
                                    }}
                                </CountUp>
                            </div>
                        </div>     
                    </div>
                </section>
            </div>
        </div>
    );
}
