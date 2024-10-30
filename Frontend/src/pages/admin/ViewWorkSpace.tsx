import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import WorkspaceDetail from "../../components/admin/WorkspaceDetail";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getWorkspaceById } from "../../services/adminService";
import Loading from "react-loading";
import { PRIMARY_COLOR } from "../../constant/colors";
import { IWorkspace } from "../../@types/workspace";

const View = () => {
  const { workspaceId } = useParams();
  const [workspace, setWorkspace] = useState<IWorkspace>({
    _id: "",
    buildingName: "",
    state: "",
    district: "",
    location: "",
    pinCode: "",
    street: "",
    contactNo: "",
    powerBackup: false,
    ac: false,
    bathroom: false,
    tablesAvailable: 0,
    seatsPerTable: 0,
    photos: [],
    video: "",
    imageAdded: false,
    videoAdded: false,
    pricePerSeat: 0,
    timing: "",
    workingDays: "",
    approved: false,
    ownerId: "",
  });
   const [loading, setLoading]= useState<boolean>(false);

  const fetchWorkspace = async () => {
    try {

      setLoading(true);
      const response = await getWorkspaceById(workspaceId as string);



      if (!response.data.data) {
        setLoading(false);
        toast.error("Workspace not found");
        return;
      }

      setWorkspace(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      toast.dismiss();
      setLoading(false);
      toast.error("An error occurred while fetching workspace details");
    }
  };

  useEffect(() => {
    fetchWorkspace();
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center  h-screen w-screen flex justify-center items-center">
          <Loading type="bars" color={PRIMARY_COLOR} height={100} width={100} />
        </div>
      ) : (
        <div className="flex h-screen">
          <div className="flex-1 flex flex-col">
            <AdminLayout
              component={
                <WorkspaceDetail workspace={workspace} />
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default View;

