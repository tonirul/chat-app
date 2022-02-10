import React, { memo } from 'react';
import { Alert, Button, Drawer } from 'rsuite';
import { useParams } from 'react-router';
import { useMediaQuery, useModalState } from '../../../misc/custom-hooks';
import { useCurrentRoom } from '../../../context/current-rrom.context';
import { database } from '../../../misc/firebase';
import EditableInput from '../../EditableInput';

const EditRoomBtnDwarer = () => {
  const { isOpen, open, close } = useModalState();

  const { chatId } = useParams();
  const isMobile = useMediaQuery('(max-width: 992px)');

  const name = useCurrentRoom((v) => v.name);
  const description = useCurrentRoom((v) => v.description);

  const updateData = (key, value) => {
    database
      .ref(`room/${chatId}`)
      .child(key)
      .set(value)
      .then(() => {
        Alert.success('Successfully updated', 4000);
      })
      .catch((err) => {
        Alert.error(err.message, 4000);
      });
  };

  const onNameSave = (newName) => {
    updateData('name', newName);
  };

  const onDescriptionSave = (newDesc) => {
    updateData('description', newDesc);
  };

  return (
    <div>
      <Button className="br-circle" size="sm" color="red" onClick={open}>
        A
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="right">
        <Drawer.Header>
          <Drawer.Title>Edit room</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <EditableInput
            initialValue={name}
            onSave={onNameSave}
            label={<h6 className="mb-2">Name</h6>}
            emptyMsg="Name can not be empty"
          />
          <EditableInput
            componentClass="textarea"
            rows={5}
            initialValue={description}
            onSave={onDescriptionSave}
            emptyMsg="Description can not be empty"
            wrapperClassName="mt-3"
          />
        </Drawer.Body>
        <Drawer.Footer>
          <Button block onClick={close}>
            Close
          </Button>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
};

export default memo(EditRoomBtnDwarer);
