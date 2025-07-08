import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { LayoutGroup } from 'framer-motion'
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

export default function Card(props) {

    const [expanded, setExpanded] = useState(false);
    return (
        <div className='Card'>
            <LayoutGroup>
                {expanded ?
                    (
                        'd'
                        // <ExpandedCard/>
                    )
                    :
                    <CompactCard
                        param={props} />}
            </LayoutGroup>
        </div>
    )
}
function CompactCard({ param }) {
    const Png = param.png;
    return (
        <div className="CompactCard"
            style={
                { background: param.color.backGround, boxShadow: param.color.boxShadow }
            }>
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`} />
            </div>
            <div className="detail">
                <Png />
                <span>{param.value}</span>
                <span> past 24 hours</span>

            </div>
        </div>

    )
}