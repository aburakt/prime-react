import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { Tooltip } from "primereact/tooltip";

export default function UploadTab() {
	const [setTotalSize] = useState(0);
	const toast = useRef(null);
	const fileUploadRef = useRef(null);

	const onUpload = () => {
		toast.current.show({
			severity: "info",
			summary: "Success",
			detail: "File Uploaded",
		});
	};

	const onTemplateClear = () => {
		setTotalSize(0);
	};

	const emptyTemplate = () => {
		return (
			<div className="flex align-items-center flex-column">
				<i
					className="pi pi-image mt-3 p-5"
					style={{
						fontSize: "5em",
						borderRadius: "50%",
						backgroundColor: "var(--surface-b)",
						color: "var(--surface-d)",
					}}
				></i>
				<span
					style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
					className="my-5"
				>
					Drag and Drop Image Here
				</span>
			</div>
		);
	};

	return (
		<div>
			<Toast ref={toast}></Toast>

			<Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
			<Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
			<Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

			<div className="card">
				<h5>Advanced</h5>
				<FileUpload
					ref={fileUploadRef}
					name="demo[]"
					url="https://primefaces.org/primereact/showcase/upload.php"
					onUpload={onUpload}
					multiple
					accept="image/*"
					maxFileSize={1000000}
					emptyTemplate={emptyTemplate}
					onError={onTemplateClear}
					onClear={onTemplateClear}
				/>
			</div>
		</div>
	);
};
