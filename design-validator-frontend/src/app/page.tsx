'use client';

import { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
  Chip,
  Box,
  Divider,
} from '@mui/material';

const statusColor = (status: string) => {
  switch (status) {
    case 'PASS':
      return 'success';
    case 'WARN':
      return 'warning';
    case 'FAIL':
      return 'error';
    default:
      return 'default';
  }
};

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleValidate = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('http://localhost:3001/design/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ freeTextInput: input }),
      });

      const data = await res.json();
      setResult(data.aiResult);
    } catch {
      setResult({ error: 'Unable to connect to backend' });
    } finally {
      setLoading(false);
    }
  };

  const confidenceLabel =
    result?.confidence?.overall >= 0.85
      ? 'High'
      : result?.confidence?.overall >= 0.6
      ? 'Medium'
      : 'Low';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F5F7FA',
        pb: 6,
        pt: 4,
      }}
    >
      {/* Hero / Title Section */}
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 5 }}>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ color: '#0A3A5A' }}
        >
          AI Cable Design Validator
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: '#475569', mt: 1 }}
        >
          Get instant AI-assisted design validation with confidence scoring
        </Typography>
      </Container>

      {/* Input Form Section */}
      <Container maxWidth="md">
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: '0px 8px 24px rgba(0,0,0,0.06)',
            backgroundColor: '#ffffff',
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ mb: 2, color: '#0A3A5A' }}
          >
            Enter Cable Design
          </Typography>

          <TextField
            fullWidth
            label="Cable Design Input"
            placeholder="e.g., IEC 60502-1, 0.6/1 kV, Cu, Class 2, 10 mm², PVC, insulation 1.0 mm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            multiline
            rows={3}
            sx={{
              backgroundColor: '#F7F9FC',
              borderRadius: 1,
            }}
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleValidate}
            disabled={loading || !input}
            sx={{
              mt: 3,
              backgroundColor: '#0066CC',
              '&:hover': { backgroundColor: '#0052A3' },
            }}
          >
            {loading ? 'Validating...' : 'Validate'}
          </Button>
        </Paper>

        {/* Results Section */}
        {result && (
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              mt: 4,
              background: 'white',
              boxShadow: '0px 8px 30px rgba(0,0,0,0.08)',
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ color: '#0A3A5A', mb: 2 }}
            >
              Validation Summary
            </Typography>

            <Divider />

            <Stack spacing={2} sx={{ mt: 2 }}>
              {result.validation.map((item: any, idx: number) => (
                <Box key={idx}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      fontWeight={500}
                      sx={{ textTransform: 'capitalize', color: '#334155' }}
                    >
                      {item.field.replace('_', ' ')}
                    </Typography>

                    <Chip
                      label={item.status}
                      color={statusColor(item.status)}
                      sx={{
                        fontWeight: 600,
                        borderRadius: '8px',
                        px: 1.5,
                      }}
                    />
                  </Stack>

                  {item.comment && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5, pl: 1 }}
                    >
                      {item.comment}
                    </Typography>
                  )}
                </Box>
              ))}

              <Divider />

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  fontWeight={600}
                  sx={{ color: '#334155' }}
                >
                  Confidence
                </Typography>

                <Chip
                  label={confidenceLabel}
                  color={
                    confidenceLabel === 'High'
                      ? 'success'
                      : confidenceLabel === 'Medium'
                      ? 'warning'
                      : 'error'
                  }
                  sx={{
                    fontWeight: 600,
                    borderRadius: '8px',
                    px: 1.7,
                  }}
                />
              </Stack>
            </Stack>
          </Paper>
        )}
      </Container>
    </Box>
  );
}
