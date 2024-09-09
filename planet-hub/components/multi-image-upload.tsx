import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UploadCloud, X } from 'lucide-react';
import { Control, FieldValues, useForm } from 'react-hook-form';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];



interface ImagePreview {
    file: File;
    preview: string;
}

const MultiImageUpload = ({ form }: { form: any }) => {
    const [previewImages, setPreviewImages] = useState<ImagePreview[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setPreviewImages((prev) => [...prev, ...newImages]);
        const currentImages = form.getValues('images') || [];
        form.setValue('images', [...currentImages, ...newImages]);
    };

    const removeImage = (index: number) => {
        setPreviewImages((prev) => prev.filter((_, i) => i !== index));
        const currentImages = form.getValues('images') || [];
        form.setValue('images', currentImages.filter((_: any, i: number) => i !== index));
    };

    return (
        <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                        <div className="grid gap-4">
                            <Input
                                type="file"
                                accept={ACCEPTED_IMAGE_TYPES.join(',')}
                                multiple
                                onChange={handleFileChange}
                                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                            />
                            <div className="grid grid-cols-3 gap-4">
                                {previewImages.map((image, index) => (
                                    <div key={index} className="relative">
                                        <img src={image.preview} alt={`Preview ${index}`} className="w-full h-32 object-cover rounded-md" />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            className="absolute top-1 right-1"
                                            onClick={() => removeImage(index)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FormControl>
                    <FormDescription>
                        Upload up to 5 images (max 5MB each, .jpg, .jpeg, .png, .webp)
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default MultiImageUpload;
