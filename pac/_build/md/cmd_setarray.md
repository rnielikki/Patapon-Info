# cmd_setArray

Sets value to a 4-bytes array.

The array must be initialised through [cmd_addArray](./cmd_addarray.md) first.

## Code Information

- **Name**: `cmd_setArray`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 4a 00`
- **Assembly Address in Memory** : `0x883b210`

## Parameters

- `(int)array_index` *(8 bytes)* : Array Index.
- `(Int/Float)array_id` *(8 bytes)* : Array ID, obtained from [cmd_initarray](./cmd_initarray.md). can be int or float.
- `(Int/Float)value` *(8 bytes)* : Value to set to the given index in given array.

Array with float ID stores float values and Array with int ID stores int values.

## Example

Here is one example in hex:

```25 00 4a 00 / 04 00 00 00 / 00 00 00 00 / 08 00 00 00 / 18 01 00 00 / 10 00 00 00 / 00 00 80 bf```

Which is interpreted as:

```c
cmd_setArray((int *)iVar0, ((global)int *)giVar280, (float)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883b210(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  float *pfVar3;
  uint uVar4;
  uint uVar5;
  undefined4 uVar6;
  float fVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  uVar4 = Pac_Get_ParamType(param_2,1);
  uVar5 = Pac_Get_ParamType(param_2,2);
  if ((uVar4 & 0x70) == 0) {
    if ((uVar5 & 0x70) == 0) {
      fVar7 = *pfVar3;
    }
    else {
      fVar7 = (float)(int)*pfVar3;
    }
    uVar6 = Get_Array_BaseAddr(param_2);
    FUN_089fee38(uVar6,*puVar2,*puVar1,fVar7);
  }
  else {
    if ((uVar5 & 0x70) == 0) {
      fVar7 = (float)(int)*pfVar3;
    }
    else {
      fVar7 = *pfVar3;
    }
    uVar6 = Get_Array_BaseAddr(param_2);
    FUN_089fee54(fVar7,uVar6,*puVar2,*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

