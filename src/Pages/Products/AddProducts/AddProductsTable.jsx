import MyModal from "components/Modal/Modal";
import { useState, useEffect, useContext } from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import Icon from "@mui/material/Icon";
import Skeleton from "@mui/material/Skeleton";
import { useSnackbar } from "notistack";
import LoadingButton from "components/LoadingButton";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { AddProductsForm } from "./AddProductsForm";

export const AddProductsTable = ({ reload, setReload }) => {
  const [mySkillData, setMySkillData] = useState([]);


  console.log("navbar list : ", mySkillData);

  function Author({ name }) {
    return (
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
      </SoftBox>
    );
  }

  function EditAction({ reload, setReload, data }) {
    const [openEdit, setOpenEdit] = useState(false);

    return (
      <>
        <SoftBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <SoftBox mr={1}>
            <SoftButton variant="text" color="primary" onClick={() => setOpenEdit(true)}>
              <Icon>edit</Icon>&nbsp;Edit
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <MyModal open={openEdit} setOpen={setOpenEdit} height="100vh">
          <SoftTypography
            color="success"
            fontWeight="bolder"
            textTransform="uppercase"
            textAlign="center"
          >
            Edit Navbar List
          </SoftTypography>

          <AddProductsForm
            editMode={true}
            setOpen={setOpenEdit}
            data={data}
            reload={reload}
            setReload={setReload}
          />
        </MyModal>
      </>
    );
  }

  function DeleteAction({ data, reload, setReload }) {
    const [openDelete, setOpenDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const deleteSkill = async () => {
      const deleteRef = doc(firebaseDb, "myskill", data?.id);
      await deleteDoc(deleteRef)
        .then((res) => {
          enqueueSnackbar("Skill has been deleted successfulyy", { variant: "success" });
        })
        .catch((err) => {
          enqueueSnackbar("Error Occured !!! Try Again", { variant: "error" });
          console.log(err);
        });
    };

    return (
      <>
        <SoftBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <SoftBox mr={1}>
            <SoftButton variant="text" color="error" onClick={() => setOpenDelete(true)}>
              <Icon>delete</Icon>&nbsp;Delete
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <MyModal open={openDelete} setOpen={setOpenDelete}>
          <SoftTypography
            color="error"
            fontWeight="bolder"
            textTransform="uppercase"
            textAlign="center"
            mb={2}
          >
            Delete Skill
          </SoftTypography>
          <SoftTypography color="dark" fontWeight="normal" textTransform="uppercase" mb={2}>
            Do you want to remove this Skill?
          </SoftTypography>
          <LoadingButton
            title="confirm"
            loading={loading}
            color="success"
            action={deleteSkill}
            size="small"
          />
          &nbsp;
          <SoftButton color="error" onClick={() => setOpenDelete(false)} size="small">
            Cancel
          </SoftButton>
        </MyModal>
      </>
    );
  }

  const columns = [
    { name: "S.No", align: "center" },
    { name: "Product Name", align: "left" },
    { name: "Image", align: "left" },
    { name: "Price", align: "left" },
    { name: "Quantity", align: "left" },
    { name: "Discount", align: "left" },
    { name: "Status", align: "left" },
    { name: "Action", align: "left" },
  ];

  const temp = [0, 1, 2, 3].map((item) => ({
    "S.No": <Skeleton animation="wave" width={50} />,
    "Product Name": <Skeleton animation="wave" width={50} />,
    "Image": <Skeleton animation="wave" width={50} />,
    "Price": <Skeleton animation="wave" width={50} />,
    "Quantity": <Skeleton animation="wave" width={50} />,
    "Discount": <Skeleton animation="wave" width={50} />,
    "Status": <Skeleton animation="wave" width={50} />,
    Action: <Skeleton animation="wave" width={50} />,
  }));

  const [rows, setRows] = useState(temp);

  useEffect(() => {
    if (mySkillData !== []) {
      let temp = [];
      for (let i = 0; i < mySkillData.length; i++) {
        let classData = mySkillData[i];
        temp.push({
          "S.No": (
            <SoftTypography variant="caption" color="secondary" fontWeight="medium">
              {i + 1}
            </SoftTypography>
          ),
          "Product Name": <Author name={parse(classData?.skill)} />,
          "Image": <Author name={parse(classData?.description.substring(0,120))} />,
          "Price": <Author name={parse(classData?.skill)} />,
          "Quantity": <Author name={parse(classData?.skill)} />,
          "Discount": <Author name={parse(classData?.skill)} />,
          "Status": <Author name={parse(classData?.skill)} />,
          Action: (
            <>
              <>
                <SoftBox
                  display="flex"
                  alignItems="center"
                  mt={{ xs: 2, sm: 0 }}
                  ml={{ xs: -1.5, sm: 0 }}
                >
                  <SoftBox>{/* <StartAction data={classData} /> */}</SoftBox>
                  <SoftBox>
                    <EditAction data={classData} reload={reload} setReload={setReload} />
                  </SoftBox>

                  <SoftBox>
                    <DeleteAction data={classData} reload={reload} setReload={setReload} />
                  </SoftBox>
                </SoftBox>
              </>
            </>
          ),
        });
      }
      setRows(temp);
    }
  }, [mySkillData]);

  return {
    columns,
    rows,
  };
};
