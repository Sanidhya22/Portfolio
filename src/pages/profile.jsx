import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,

} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard } from "@/widgets/cards";
import { PROFILE_INFO, SOCIAL_LINKS } from "../data/profile-info";
import { projectsData } from "@/data";

export function Profile() {
  return (
    <>
      <div className="relative mt-8 h-20 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/Portfolio/img/my-img.png"
                alt="bruce-mars"
                size='xxl'
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {PROFILE_INFO.NAME}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  {PROFILE_INFO.PROFESSION}
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Info
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4">
            <ProfileInfoCard
              description={PROFILE_INFO.SUMMERY}
              details={{
                mobile: PROFILE_INFO.MOBILENO,
                email: PROFILE_INFO.EMAIL,
                location: PROFILE_INFO.LOCATION,
                social: (
                  <div className="flex items-center gap-4">
                    <Link to={SOCIAL_LINKS.github.LINK}>
                      <i className="fa-brands fa-github text-black-700" /></Link>
                    <Link to={SOCIAL_LINKS.linkedin.LINK}>  <i className="fa-brands fa-linkedin text-blue-700" /></Link>
                    <Link to={SOCIAL_LINKS.github.LINK}> <i className="fa-brands fa-twitter text-blue-400" /></Link>
                  </div>
                ),
              }}
            />

          </div>

          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Projects
            </Typography>

            <div className="mt-6 gap-10 flex flex-col">
              {projectsData.map(
                ({ img, title, description, github, live }) => (
                  <Card key={title} color="transparent" shadow={false}>
                    <CardBody className="py-0 px-1">

                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-1 mb-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-6 flex items-center gap-6 py-0 px-1">

                      {live ? <Link to={live}>
                        <Button variant="outlined" size="sm">
                          live
                        </Button>
                      </Link>
                        : <></>}

                      {github &&
                        <Link to={github}>
                          <Button variant="outlined" size="sm">
                            <i className="fa-brands fa-github text-black-700 pr-2" />
                            source
                          </Button>
                        </Link>}

                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </CardBody>
      </Card>

    </>
  );
}

export default Profile;
