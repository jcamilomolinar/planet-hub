"use client";

import { birthTable, nameStates } from "@/lib/QueryData"
import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/Button"
import QueryFormFieldCombobox from "@/components/QueryFormFieldCombobox"
import QueryFormFieldYear from "@/components/QueryFormFieldYear"
import QueryFormFieldInput from "@/components/QueryFormFieldInput";
import QueryFormFieldSwitch from "@/components/QueryFormFieldSwitch";
import QueryFormFieldCheckbox from "./QueryFormFieldCheckbox";
import { BarChart } from "@/components/Graph";
import Container from "@/components/ui/Container"
import {
  Form,
} from "@/components/ui/Form"
import { on } from "events";

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  birthTable: z.string(),
  year: z.enum(["2016", "2017", "2018", "All"]),
  avgBirthWeight: z.boolean().default(false),
  avgAgeMother: z.boolean().default(false),
  saveQuery: z.boolean().default(false),
  state: z.enum(nameStates, {
    errorMap: (issue, _ctx) => {
      switch (issue.code) {
        case 'invalid_enum_value':
          return { message: 'Enter a valid state.' };
        default:
          return { message: 'Invalid input.' };
      }
    },
  }),
  queryName: z.string().optional(),
  queryDescription: z.string().optional(),
})

function QueryForm() {
  const [show, setShow] = useState(false);
  const [showGraphs, setshowGraphs] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    render();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chargeQuery = async () => {
    const queryId = localStorage.getItem('queryId');
    const response = await fetch(`http://localhost:8000/api/retrieve-query/${queryId}`);
    return response.json()
  }

  const render = () => {
    if (localStorage.getItem('queryId') != null) {
      const query = chargeQuery();

      query.then((data) => {
        // Put the year value in the form
        form.setValue('year', data.year);
        form.setValue('birthTable', data.birthTable);
        form.setValue('avgBirthWeight', data.avgBirthWeight);
        form.setValue('avgAgeMother', data.avgAgeMother);
        form.setValue('state', data.state);
      });
    }
    localStorage.clear();
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      birthTable: "",
      state: "",
      queryName: "",
      queryDescription: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    const response = await fetch('http://localhost:8000/api/send-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(
      (res) => res.json()
    ).then(
      (data) => {
        const parsedData = []
        console.log(data)

        parsedData.push(data.map(element => {
          return { label: "AverageBirths - " + element.Condition, value: element.AverageBirths };
        }))

        parsedData.push(data.map(element => {
          return { label: "SumBirths - " + element.Condition, value: element.SumBirths };
        }))

        if (form.getValues('avgBirthWeight')) {
          parsedData.push(data.map(element => {
            return {
              label: "AverageBirthWeight - " + element.Condition, value: element.AverageBirthWeight
            };
          }));
        }

        if (form.getValues('avgAgeMother')) {
          parsedData.push(data.map(element => {
            return { label: "AverageAgeMother - " + element.Condition, value: element.AverageAgeMother };
          }))
        }
        setData(parsedData);
        setshowGraphs(true);


      }
    );
  }



  function showFields() {
    if (show) {
      return (
        <div className="col-span-2 space-y-5">
          <QueryFormFieldInput
            form={form}
            name={"queryName"}
            label={"Query Name"}
            placeholder={"Enter a name for your query"}
            description={"This is the name that will be displayed in the queries section"}
          />
          <QueryFormFieldInput
            form={form}
            name={"queryDescription"}
            label={"Query Description"}
            placeholder={"Enter a description for your query"}
            description={"This is the description that will be displayed in the queries section"}
          />
        </div>
      )
    }
  }

  return (
    <>
      <Container>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5 p-5">
            <QueryFormFieldInput
              form={form}
              name={"username"}
              label={"Username"}
              placeholder={"Be creative!"}
              description={"This is your public display name."}
            />
            <QueryFormFieldInput
              form={form}
              name={"state"}
              label={"State"}
              placeholder={"Search in a specific state!"}
              description={"Enter a state to search for data only from that state"}
            />
            <div className="col-span-2">
              <QueryFormFieldCombobox
                elements={birthTable}
                form={form}
                title={"Segregate by"}
                name={"birthTable"}
                description="Select the main characteristic to consult about"
              />
            </div>
            <div className="grid place-items-center">
              <QueryFormFieldYear
                form={form}
              />
            </div>
            <div className="flex-col space-y-3">
              <QueryFormFieldSwitch
                form={form}
                name={"avgBirthWeight"}
                description={"Include the average birth weight"}
              />
              <QueryFormFieldSwitch
                form={form}
                name={"avgAgeMother"}
                description={"Include the average age of the mother"}
              />
              <QueryFormFieldCheckbox
                form={form}
                name={"saveQuery"}
                description={"You can view your saved queries in the queries section"}
                label="Save this Query"
                changes={() => setShow(!show)}
              />
            </div>
            {showFields()}
            <Button className="col-span-2" type="submit">Run Query</Button>
          </form>
        </Form>
      </Container>
      {showGraphs ? <div className="p-10 gap-20">{data.map((element, index) => <BarChart key={index} data={element} />)}</div> : <></>}
    </>
  )
}


export default QueryForm