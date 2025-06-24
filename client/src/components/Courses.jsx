import * as React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import generalStore from '../store/Genral.store';

export default function CoursesGrid() {
  const courses = generalStore((state) => state.courses);
  const [open, setOpen] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const handleOpen = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCourse(null);
  };

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card
              sx={{
                maxWidth: 345,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "'Josefin Sans', sans-serif" }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', fontFamily: "'Josefin Sans', sans-serif" }}
                  >
                    {course.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'flex-end', px: 2 }}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handleOpen(course)}
                  sx={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for course details */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: '#fff',
            fontFamily: "'Josefin Sans', sans-serif",
            backdropFilter: 'blur(0px)',
            borderRadius: 3,
            px: 3,
            py: 2,
          },
        }}
      >
        {selectedCourse && (
          <>
            <DialogTitle
              sx={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '2rem',
                mb: 1,
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              {selectedCourse.title}
            </DialogTitle>

            <DialogContent dividers sx={{ fontSize: '1.05rem' }}>
              <Typography sx={{ mb: 2, fontFamily: "'Josefin Sans', sans-serif" }}>
                <strong style={{ color: '#90caf9' }}>Description:</strong> {selectedCourse.description}
              </Typography>

              {selectedCourse.summary && (
                <Typography sx={{ mb: 2, fontFamily: "'Josefin Sans', sans-serif" }}>
                  <strong style={{ color: '#90caf9' }}>Summary:</strong> {selectedCourse.summary}
                </Typography>
              )}

              {selectedCourse.syllabus && (
                <>
                  <Typography
                    sx={{
                      mt: 2,
                      mb: 1,
                      fontWeight: 600,
                      color: '#ffca28',
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Syllabus
                  </Typography>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    {selectedCourse.syllabus.map((topic, index) => (
                      <li key={index}>
                        <Typography
                          variant="body2"
                          sx={{ mb: 0.5, fontFamily: "'Josefin Sans', sans-serif" }}
                        >
                          {topic}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {selectedCourse.tools && (
                <>
                  <Typography
                    sx={{
                      mt: 2,
                      mb: 1,
                      fontWeight: 600,
                      color: '#ffca28',
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Tools Covered
                  </Typography>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    {selectedCourse.tools.map((tool, index) => (
                      <li key={index}>
                        <Typography
                          variant="body2"
                          sx={{ mb: 0.5, fontFamily: "'Josefin Sans', sans-serif" }}
                        >
                          {tool}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </DialogContent>

            <DialogActions>
              <Button
                onClick={handleClose}
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  fontFamily: "'Josefin Sans', sans-serif",
                  px: 3,
                  py: 1,
                  borderRadius: '8px',
                }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}
