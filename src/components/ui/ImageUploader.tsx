interface Props {
    image: File | null
    setImage:   React.Dispatch<React.SetStateAction<File | null>>
}

const ImageUploader = ({ image, setImage }: Props) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Custom Upload Button */}
      <label
        htmlFor="file-input"
        className="cursor-pointer text-xs bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors shadow-md flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16v-4m0 0V8m0 4h4m-4 0H8m12-3.429A9.956 9.956 0 0012 2a9.956 9.956 0 00-8 4.571M12 22a9.956 9.956 0 008-4.571M3.6 8.571H3.2c-.993 0-1.876.592-2.24 1.495L12 21l10.04-10.933c-.364-.903-1.247-1.495-2.24-1.495h-.4"
          />
        </svg>
        Upload Image
      </label>

      {/* Hidden Input */}
      <input
        id="file-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Display Selected File Name */}
      {image && (
        <p className="text-sm text-gray-600">
          Selected File: <span className="font-medium">{image.name}</span>
        </p>
      )}
    </div>
  );
};

export default ImageUploader;
