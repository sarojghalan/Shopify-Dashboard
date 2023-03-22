import React, { useState, useEffect } from "react";

import Required from "components/Required";
// Soft Imports
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import LoadingButton from "components/LoadingButton";
import { useSnackbar } from "notistack";

export const CouponsForm = ({ setOpen, reload, setReload, editMode, data }) => {
  const initialState = {
    skill: "",
    description: "",
    image: "",
  };
  const [mySkill, setMySkill] = useState(initialState);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editMode && data) {
      setMySkill({
        skill: data.skill,
        description: data.description,
      });
    }
  }, [editMode, data]);

  const handleSkill = (e) => {

  };

  const createSkill = () => {
  };

  return (
    <SoftBox component="form" role="form">
      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Brand English
            <Required />
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="text"
          placeholder="Enter here..."
          required
          name="skill"
          value={mySkill.skill}
          onChange={handleSkill}
        />
      </SoftBox>
      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Brand Nepali
            <Required />
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="text"
          placeholder="Enter here..."
          required
          name="skill"
          value={mySkill.skill}
          onChange={handleSkill}
        />
      </SoftBox>

      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Brand Image
            <Required />
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="file"
          name="image"
          placeholder="Input File Here.."
          onChange={handleSkill}
        />
      </SoftBox>
      <SoftBox mt={4} mb={1}>
        <LoadingButton
          title={editMode ? "Update Coupons" : "Create Coupons"}
          loading={loading}
          action={createSkill}
        />
        &nbsp;
        <SoftButton variant="gradient" color="error" onClick={() => setOpen(false)}>
          Close
        </SoftButton>
      </SoftBox>
    </SoftBox>
  );
};
