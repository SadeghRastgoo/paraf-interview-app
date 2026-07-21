import { RecentActivities } from "@/features/club/activities/RecentActivities";
import { ActivitiesChart } from "@/features/club/activities-chart/ActivitiesChart";
import { Banner } from "@/features/club/banner/Banner";
import { ClubBenefits } from "@/features/club/benefits/ClubBenefits";
import { CustomersClub } from "@/features/club/customers-club/CustomersClub";
import { WelcomeHero } from "@/features/club/hero/WelcomeHero";
import { MembershipProgress } from "@/features/club/membership/MembershipProgress";
import { Container } from "@/shared/components/container";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <WelcomeHero />
      <CustomersClub />
      <MembershipProgress />
      <Banner />
      <Container>
        <div className="grid grid-cols-[2fr_1fr] gap-4">
          <RecentActivities />
          <ActivitiesChart />
        </div>
      </Container>

      <ClubBenefits />
    </div>
  );
}
