import React, { useState, useEffect } from "react";

import Required from "components/Required";
// Soft Imports
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import LoadingButton from "components/LoadingButton";
import { useSnackbar } from "notistack";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const AddProductsForm = ({ setOpen, reload, setReload, editMode, data }) => {
  const initialState = {
    skill: "",
    description: "",
    image: "",
  };
  const [mySkill, setMySkill] = useState(initialState);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [quillValue, setQuillValue] = useState("");
  const [checkedIndex, setCheckedIndex] = useState(-1);

  useEffect(() => {
    if (editMode && data) {
      setMySkill({
        skill: data.skill,
        description: data.description,
      });
    }
  }, [editMode, data]);

  const handleCheckboxClick = (index) => {
    setCheckedIndex(index);
  };

  const handleSkill = (e) => {};

  const createSkill = () => {};

  console.log("quill value is : ", quillValue);

  return (
    <SoftBox component="form" role="form">
      <div className="row">
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Select Brand
                <Required />
              </SoftTypography>
            </SoftBox>
            <select className="form-control" name="stream_id">
              <option value="">Select brand</option>
            </select>
          </SoftBox>
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Select Category
                <Required />
              </SoftTypography>
            </SoftBox>
            <select className="form-control" name="stream_id">
              <option value="">Select Category</option>
            </select>
          </SoftBox>
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Select Sub Category
                <Required />
              </SoftTypography>
            </SoftBox>
            <select className="form-control" name="stream_id">
              <option value="">Select Sub Category</option>
            </select>
          </SoftBox>
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Title
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
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Code
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
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Quantity
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
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Tags
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
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Size
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
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Color
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
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Selling Price
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
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Discount Price
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
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Thumbnail Image
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
        </div>
        <div className="col-md-4">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Multiple Image
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
        </div>
        <div className="col-md-8">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Short Description
                <Required />
              </SoftTypography>
              <SoftInput
                type="text"
                placeholder="Enter here..."
                required
                name="skill"
                value={mySkill.skill}
                onChange={handleSkill}
              />
            </SoftBox>
          </SoftBox>
        </div>
        <div className="col-md-12">
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Product Long Description
                <Required />
              </SoftTypography>
            </SoftBox>
            <ReactQuill
              theme="snow"
              value={quillValue}
              onChange={setQuillValue}
            />
          </SoftBox>
        </div>
        <div className="col-md-3">
        <FormControlLabel
        label="Parent"
        control={
          <Checkbox
          checked={checkedIndex === 0}
        onClick={() => handleCheckboxClick(0)}
        color="secondary"
          />
        }
      />
        </div>
      </div>
      <SoftBox mt={4} mb={1}>
        <LoadingButton
          title={editMode ? "Update Products" : "Create Products"}
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
