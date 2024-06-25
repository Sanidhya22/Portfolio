import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,

} from "@material-tailwind/react";
import {

    ArrowUpIcon,
} from "@heroicons/react/24/outline";

import {

    ordersOverviewData,
} from "@/data";


export function EducationInfo() {
    return (
        <Card className="p-0 shadow-none">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 p-0"
            >
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    Academics
                </Typography>

            </CardHeader>
            <CardBody className="p-0">
                {ordersOverviewData.map(
                    ({ icon, color, title, description }, key) => (
                        <div key={title} className="flex items-start gap-4 py-3">
                            <div
                                className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${key === ordersOverviewData.length - 1
                                    ? "after:h-0"
                                    : "after:h-4/6"
                                    }`}
                            >
                                {React.createElement(icon, {
                                    className: `!w-5 !h-5 ${color}`,
                                })}
                            </div>
                            <div>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="block font-medium"
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="text-xs font-medium text-blue-gray-500"
                                >
                                    {description}
                                </Typography>
                            </div>
                        </div>
                    )
                )}
            </CardBody>
        </Card>
    )
}