import React from 'react'
import styled from 'styled-components';
import { db } from '../firebase.js';
import { collection, addDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from '../features/appSlice.js';

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  
  :hover {
    cursor: pointer;
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {

  const channelsRef = collection(db, 'rooms');
  const [channels, loading, error] = useCollection(channelsRef);

  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');
    if (channelName) {
      addDoc(channelsRef, {
        name: channelName,
      });
    }
  }

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({
        roomId: id
      }))
    }
  }

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize='small' style={{padding: 10}} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
      
    </SidebarOptionContainer>
  )
}

export default SidebarOption