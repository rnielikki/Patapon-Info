# cmd_addArray

Initialises a 4-bytes array with given size.

## Code Information

- **Name**: `cmd_addArray`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 49 00`
- **Assembly Address in Memory** : `0x883b18c`

## Parameters

- `(int)array_length` *(8 bytes)* : Capacity of the array.
- `(Int/Float *)array_id` *(8 bytes)* : Variable to *store* the array ID. Can be int or float.

Array with float ID stores float values and Array with int ID stores int values.

## Example

Here is one example in hex:

```25 00 49 00 / 02 00 00 00 / 08 00 00 00 / 08 00 00 00 / 18 01 00 00```

Which is interpreted as:

```c
cmd_addArray((int)8, ((global)int *)giVar280)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883b18c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar3 = Get_Array_BaseAddr(param_2);
  uVar3 = FUN_089fee14(uVar3,*puVar1);
  *puVar2 = uVar3;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

