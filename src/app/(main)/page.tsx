import { RecentActivities } from "@/features/club/activities/components/RecentActivities";
import { ActivitiesChart } from "@/features/club/activities-chart/components/ActivitiesChart";
import { Banner } from "@/features/club/banner/components/Banner";
import { ClubBenefits } from "@/features/club/benefits/components/ClubBenefits";
import { WelcomeHero } from "@/features/club/hero/components/WelcomeHero";
import { Container } from "@/shared/components/ui/container";
import { CustomersClub } from "@/features/club/customers-club/components/CustomersClub";
import { MembershipProgress } from "@/features/club/membership/components/MembershipProgress";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <WelcomeHero />
      <CustomersClub />
      <MembershipProgress />
      <Banner />
      <Container>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
          <RecentActivities />
          <ActivitiesChart />
        </div>
      </Container>
      <ClubBenefits />
    </div>
  );
}
