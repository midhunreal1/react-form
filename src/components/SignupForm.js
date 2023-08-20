import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './Form.css'
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const schema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    address: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log('Signup form submitted:', data);
  };

  return (
    <Container>
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="fullName"
            {...register('fullName')}
          />
          {errors.fullName && <p className="error">{errors.fullName.message}</p>}
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            {...register('email')}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            {...register('password')}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            {...register('address')}
          />
          {errors.address && <div className="error">{errors.address.message}</div>}
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone"
            {...register('phone')}
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p>Already have an account? <Link to="/login" className="link">Login here</Link></p>
      </Form>
    </Container>
  );
};

export default SignupForm;
