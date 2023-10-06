import {React, useState} from 'react';
import Tabs from './atoms/Tabs';
import Wrapper from './atoms/Wrapper';
import {motion, AnimatePresence } from 'framer-motion';
import { ResponsiveContainer, Legend, Tooltip, Cell, Pie, PieChart, Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
    {
        name: 'completed',
        value: 42
    },
    {
        name: 'not completed',
        value: 60
    }
] //this is dummy data for now

const data2 = [
    {
        name: 'persona 5',
        value: 52
    },{
        name: 'yakoozer',
        value: 30
    },
    {
        name: 'persona 4',
        value: 70
    },
]

const data3 = [
    {
        month: 'january',
        hours: 50,
    },
    {
        month: 'february',
        hours: 70,
    },
    {
        month: 'march',
        hours: 112,
    },
    {
        month: 'april',
        hours: 24,
    },
    {
        month: 'may',
        hours: 40,
    },
]


function CompletionChart(){
    return (
        <ResponsiveContainer height='75%'>
            <PieChart>
                <Pie data={data} dataKey="value" innerRadius={50} outerRadius={100}>
                    <Cell key="cell-0" fill="#86efac" strokeWidth={0}/>
                    <Cell key="cell-1" fill="#b22222" strokeWidth={0}/>
                </Pie>
                <Legend/>
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
    )
}

function HoursChart(){
    return (
        <ResponsiveContainer height='75%' width='90%'>
            <BarChart data={data2}>
                <Bar dataKey="value" fill="#FFFFFF"/>
                <XAxis dataKey='name'/>
                <YAxis datakey='value'/>
                <Tooltip/>
            </BarChart>
        </ResponsiveContainer>
    )
}

function PlaceholderChart(){
    return (
        <ResponsiveContainer height='75%' width='90%'>
            <LineChart data={data3}>
                <CartesianGrid />
                <Legend />
                <Tooltip />
                <XAxis dataKey='month'/>
                <YAxis />
                <Line type="monotone" dataKey='hours'/>
            </LineChart>
        </ResponsiveContainer>
    )
}

const tabs = [
    "completion",
    "slaceplerdr",
    "placeholder"
]

function Charts(){
    const [selected, select] = useState(tabs[0])

    return (
        <Wrapper className="dark-wrapper w-1/4 h-3/4">

            <div className="flex flex-wrap wrapper justify-center w-full"> 
                <Tabs layoutId='graphTabs' selected={selected} setSelected={select} tabs={tabs}/>

                <div className="flex h-5/6 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            initial={{x : '-200%'}}
                            animate={{x: '0%'}}
                            exit={{x: '200%'}}
                            className="flex w-full h-full items-center"
                            key={selected}
                        >
                            {
                                selected === "completion" ? (
                                    <CompletionChart/>
                                ) : (selected === "slaceplerdr" ? <HoursChart /> : <PlaceholderChart />)
                            }

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </Wrapper>
    )
}


export default Charts;