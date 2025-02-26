'use client';

import '@/app/ui/ideas/wall.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';


export default function Wall() {
    return (
            <div className="expo">
                <div className="heading-style-h6">
                    Timeless  
                </div>
                <div className="spacer-tiny" />
                <h2 className="heading-style-h4  alice-regular">
                    Curated & Aesthetics
                </h2>
                <div className="stage">
                    <div className="wall">
                    <div className="ring">
                        <div className="img" />
                        <div className="img" />
                        <div className="img" />
                        <div className="img" />
                        <div className="img" />
                        <div className="img" />
                        <div className="img" />
                        <div className="img" />
                        <div className="img" />
                        <div className="img" />
                    </div>
                    </div>
                </div>
            </div>
    );
}
