import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Box, Button, Menu, MenuItem, Pagination, Stack, Typography } from '@mui/material';
import PropertyCard from '../../libs/components/property/PropertyCard';
import withLayoutBasic from '../../libs/components/layout/LayoutBasic';
import Filter from '../../libs/components/property/Filter';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import useDeviceDetect from '@/libs/hooks/useDeviceDetect';



const PropertyList: NextPage = () => {
  
  const [properties, setProperties] = useState<number[]>([1,2,3,4,5,6]);
  const device = useDeviceDetect();
    
  if(device === "mobile"){
     return <Stack>PROPERTY LIST mobile</Stack>
  }else{
    return (
      <div id="property-list-page" style={{ position: 'relative' }}>
        <div className="container">
          <Box component={'div'} className={'right'}>
            <span>Sort by</span>
            <div>
              <Button endIcon={<KeyboardArrowDownRoundedIcon />}>
                New
              </Button>
            </div>
          </Box>
          <Stack className={'property-page'}>
            <Stack className={'filter-config'}>
              {/* @ts-ignore */}
              <Filter/>
            </Stack>
            <Stack className="main-config" mb={'76px'}>
              <Stack className={'list-config'}>
                  {properties.map((property, index) => {
                    return <PropertyCard key={index} />;
                  })}
              </Stack>
              <Stack className="pagination-config">
                {properties.length !== 0 && (
                  <Stack className="pagination-box">
                    <Pagination
                      page={1}
                      count={5}
                      shape="circular"
                      color="primary"
                    />
                  </Stack>
                )}

                {properties.length !== 0 && (
                  <Stack className="total-result">
                    <Typography>
                      Total 5 properties available
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>
    );
  }
  
}

export default withLayoutBasic(PropertyList);