import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import { PieChart, Pie, LineChart, Line,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const CampaignDashboard = () => {
    const [campaignData, setCampaignData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/campaigns`); // Here we need to give the api link
            setCampaignData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Ad Campaign Performance Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Overall Performance Metrics
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={campaignData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis ticks={[0, 2000, 4000, 6000, 8000, 10000,15000]}/>
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="impressions" fill="#8884d8" />
                            <Bar dataKey="clicks" fill="#82ca9d" />
                            <Bar dataKey="conversions" fill="#ffc658" />
                        </BarChart>
                        <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <Pie dataKey="impressions" nameKey="name"  data={campaignData} fill="#8884d8" label />
            <Pie dataKey="clicks" nameKey="name" data={campaignData} fill="#82ca9d" />
            <Pie dataKey="conversions" nameKey="name" data={campaignData} fill="#ffc658" />
            {/* Add more <Pie> components as needed */}
            <Tooltip />
        </PieChart>
        <LineChart data={campaignData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis ticks={[0, 2000, 4000, 6000, 8000, 10000,15000]}/>
            <Tooltip />
            <Line type="monotone" dataKey="impressions" stroke="#82ca9d" />
            <Line dataKey="clicks" fill="#82ca9d" />
                            <Line dataKey="conversions" fill="#ffc658" />
            {/* Add more <Line> components as needed */}
        </LineChart>
                    </ResponsiveContainer>
                </Grid>
                {/* Add other components for campaign performance, ad creative analysis, etc. */}
            </Grid>
        </Container>
    );
};

export default CampaignDashboard;
