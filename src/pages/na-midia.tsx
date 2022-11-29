import React from "react";

import "./na-midia.scss";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card, Stack } from "react-bootstrap";

export default () => {
  return (
    <Layout scope="na-midia">
      {/* @todo aqui é para ser diferente são cinco carrosseis individuais, que inicial com um título */}
      <section id="section-hero" className="row g-0">
        <h1>Na Mídia</h1>
      </section>
      <section className="section-year">
        <h2>2022</h2>
        <Carousel>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="section-year">
        <h2>2020</h2>
        <Carousel>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="section-year">
      <h2>2021</h2>
        <Carousel>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="m-auto mb-4 w-75 h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </section>
    </Layout>
  )
}
