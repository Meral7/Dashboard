import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { color, motion } from "framer-motion";
import { LayoutGroup } from 'framer-motion'
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import Tooltip from './../../../../node_modules/apexcharts/src/modules/tooltip/Tooltip';

export default function Card(props) {

    const [expanded, setExpanded] = useState(false);
    return (
        <div className='Card'>
            <LayoutGroup>
                {expanded ?
                    (

                        <ExpandedCard
                            param={props} setExpanded={() => { setExpanded(false) }} />
                    )
                    :
                    <CompactCard
                        param={props} setExpanded={() => { setExpanded(true) }} />}
            </LayoutGroup>
        </div>
    )
}
function CompactCard({ param, setExpanded }) {
    const Png = param.png;
    return (
        <motion.div className="CompactCard"
            layoutId='compactCard'
            style={
                { background: param.color.backGround, boxShadow: param.color.boxShadow }
            }
            onClick={setExpanded}>
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`} />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>${param.value}</span>
                <span> past 24 hours</span>

            </div>
        </motion.div>

    )
}
function ExpandedCard({ param, setExpanded }) {
    // console.log(param);
    const data = {
        options: {
            Chart: {
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledofseries: false,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                colors: ["#fff"],

                type: "gradient",
            }
            ,
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                colors: ["#fff"]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
            , grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2023-10-01T00:00:00.000Z",
                    "2023-10-01T01:30:00.000Z",
                    "2023-10-01T02:30:00.000Z",
                    "2023-10-01T03:30:00.000Z",
                    "2023-10-01T04:30:00.000Z",
                    "2023-10-01T05:30:00.000Z",
                    "2023-10-01T06:30:00.000Z"
                ]
            },

        }
    }
    return <motion.div className="ExpandedCard"
        style={
            {
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }
        }
        layoutId='expandedCard'
    >
        <div style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }}  >  <UilTimes onClick={setExpanded} /> </div>
        <span>{param.title}</span>
        <div className="chartContaine">
            <Chart series={param.series} type="area" options={data.options} />
        </div>
        <span>Last 24 hours</span>
    </motion.div>
}