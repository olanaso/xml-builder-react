import React from "react";
import {
  PageSection,
  Title,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  Button,
  PageSectionVariants,
  TextContent,
  Text,
  Card,
  CardBody,
  Stack,
  StackItem,
  Grid,
  GridItem,
  Bullseye
} from "@patternfly/react-core";
import {
  AngleRightIcon,
  MailBulkIcon,
  BugIcon,
  ProjectIcon,
  FileExportIcon,
  ApplicationsIcon
} from "@patternfly/react-icons";
import brandImg from "../../styles/assets/images/logo.png";

export interface PageHomeProps {
  welcomeMessage: string;
}

export const PageHome: React.FC<PageHomeProps> = ({ welcomeMessage }) => {
  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">{welcomeMessage}</Text>
          <Text component="small">
            Crea tus comprobantes electrónicos usando los APIs del servidor.
          </Text>
        </TextContent>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        <Bullseye>
          <img src={brandImg} height="250" width="250" alt="Logo" />
        </Bullseye>
      </PageSection>
      <PageSection>
        <Grid lg={4} gutter="md">
          <GridItem>
            <Card>
              <CardBody>
                <EmptyState variant={EmptyStateVariant.full}>
                  <EmptyStateIcon icon={ApplicationsIcon} />
                  <Title headingLevel="h5" size="lg">
                    Consola de administración
                  </Title>
                  <EmptyStateBody>Administra el servidor</EmptyStateBody>
                  <Button className="pf-c-button pf-m-primary">
                    Administrar
                  </Button>
                </EmptyState>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              <CardBody>
                <EmptyState variant={EmptyStateVariant.full}>
                  <EmptyStateIcon icon={FileExportIcon} />
                  <Title headingLevel="h5" size="lg">
                    Documentación
                  </Title>
                  <EmptyStateBody>Guia de usuario</EmptyStateBody>
                  <a
                    href="https://project-openubl.gitbook.io/xml-builder/"
                    className="pf-c-button pf-m-primary"
                  >
                    Documentación
                  </a>
                </EmptyState>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Stack gutter="md">
              <StackItem>
                <Card style={{ minHeight: 93 }}>
                  <CardBody>
                    <a href="https://project-openubl.github.io/">
                      <Button variant="link" icon={<ProjectIcon />}>
                        Project OpenUBL <AngleRightIcon />
                      </Button>
                    </a>
                  </CardBody>
                </Card>
              </StackItem>
              <StackItem>
                <Card style={{ minHeight: 93 }}>
                  <CardBody>
                    <a href="mailto:projectopenubl+subscribe@googlegroups.com">
                      <Button variant="link" icon={<MailBulkIcon />}>
                        Mailing List <AngleRightIcon />
                      </Button>
                    </a>
                  </CardBody>
                </Card>
              </StackItem>
              <StackItem>
                <Card style={{ minHeight: 93 }}>
                  <CardBody>
                    <a href="https://github.com/project-openubl/xml-builder/issues">
                      <Button variant="link" icon={<BugIcon />}>
                        Reporta un problema <AngleRightIcon />
                      </Button>
                    </a>
                  </CardBody>
                </Card>
              </StackItem>
            </Stack>
          </GridItem>
        </Grid>
      </PageSection>
    </React.Fragment>
  );
};