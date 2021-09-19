import React, { FC, useEffect, useState } from 'react'
import { Form, Input, Button, Typography, message } from 'antd'
import { useTranslation } from 'react-i18next'

import styles from './MainForm.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { mainFormActions } from '../../store/form/reducers/mainFormSlice'

const { Title } = Typography
const { TextArea } = Input

export const MainForm: FC = () => {
  const dispatch = useAppDispatch()
  const [formAnt] = Form.useForm()

  const [count, setCount] = useState(0)

  const { t } = useTranslation(['mainForm'])

  const [formLayout, setLayout] = useState<'vertical' | 'horizontal'>(
    'horizontal'
  )

  const handleField = (fieldName: string, value: string) => {
    dispatch(mainFormActions.setField({ [fieldName]: value }))
  }

  const form = useAppSelector((state) => state.rootReducer.formReducers.form)

  const handleFinish = (form: any) => {
    const loading = message.loading(t('loading'), 0)

    setTimeout(() => {
      loading()
      if (count % 2 === 0) {
        message.success(t('success')).then(() => {})
        dispatch(mainFormActions.clearForm())
        formAnt.resetFields()
      } else {
        message.error(t('error')).then(() => {})
      }
    }, 1230)

    setCount(count + 1)
    console.log(form)
  }

  useEffect(() => {
    const listener = () => {
      if (window.innerWidth <= 643) {
        setLayout('vertical')
      } else {
        setLayout('horizontal')
      }
    }

    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  })

  return (
    <div className={styles.wrapper}>
      <Title className={styles.title} level={3}>
        {t('title')}
      </Title>
      <Form
        name="form"
        layout={formLayout}
        initialValues={{
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          company: form.company,
          city: form.city,
          message: form.message,
        }}
        autoComplete="off"
        onFinish={handleFinish}
        form={formAnt}
      >
        <div className={styles.formColumn}>
          <Form.Item
            label={t('firstName')}
            name="firstname"
            labelCol={{ span: 8 }}
            rules={[
              { required: true, message: t('validate.firstName') },
              { type: 'string', min: 5, message: t('validate.minLength') },
            ]}
          >
            <Input
              onChange={(e) => {
                handleField('firstname', e.target.value)
              }}
              className={styles.input}
            />
          </Form.Item>
          <Form.Item
            label={t('lastName')}
            name="lastname"
            labelCol={{ span: 8 }}
            rules={[
              { required: true, message: t('validate.lastName') },
              { type: 'string', min: 5, message: t('validate.minLength') },
            ]}
          >
            <Input
              onChange={(e) => {
                handleField('lastname', e.target.value)
              }}
              className={styles.input}
            />
          </Form.Item>
        </div>
        <Form.Item
          label="Email"
          name="email"
          labelCol={{ span: 6 }}
          rules={[
            { required: true, message: t('validate.email') },
            { type: 'string', min: 5, message: t('validate.minLength') },
            {
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: t('validate.emailUnvalid'),
            },
          ]}
        >
          <Input
            onChange={(e) => {
              handleField('email', e.target.value)
            }}
            className={styles.input}
          />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 6 }}
          rules={[{ type: 'string', min: 5, message: t('validate.minLength') }]}
          label={t('company')}
          name="company"
        >
          <Input
            onChange={(e) => {
              handleField('company', e.target.value)
            }}
            className={styles.input}
          />
        </Form.Item>
        <Form.Item
          label={t('city')}
          name="city"
          labelCol={{ span: 6 }}
          rules={[
            { required: true, message: t('validate.city') },
            { type: 'string', min: 5, message: t('validate.minLength') },
          ]}
        >
          <Input
            onChange={(e) => {
              handleField('city', e.target.value)
            }}
            className={styles.input}
          />
        </Form.Item>
        <Form.Item
          label={t('message')}
          name="message"
          labelCol={{ span: 6 }}
          rules={[
            { required: true, message: t('validate.message') },
            { type: 'string', min: 5, message: t('validate.minLength') },
          ]}
        >
          <TextArea
            placeholder={t('messagePlaceholder')}
            autoSize={{ minRows: 2, maxRows: 6 }}
            className={styles.input}
            onChange={(e) => {
              handleField('message', e.target.value)
            }}
          />
        </Form.Item>
        <Form.Item style={{ margin: '0 auto' }}>
          <Button
            style={{ margin: '0 auto', display: 'block' }}
            type="primary"
            htmlType="submit"
            size="large"
          >
            {t('send')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
