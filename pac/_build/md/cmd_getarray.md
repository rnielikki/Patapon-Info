# cmd_getArray

Gets value from a 4-bytes array.

The array must be initialised through [cmd_addArray](./cmd_addarray.md) first.

## Code Information

- **Name**: `cmd_getArray`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 4b 00`
- **Assembly Address in Memory** : `0x883b350`

## Parameters

- `(int)array_index` *(8 bytes)* : Array Index.
- `(Int/Float)array_id` *(8 bytes)* : Array ID, obtained from [cmd_initarray](./cmd_initarray.md). can be int or float.
- `(Int/Float *)destination` *(8 bytes)* : Variable to *store* the obtained value.

Array with float ID stores float values and Array with int ID stores int values.

## Example

Here is one example in hex:

```25 00 4b 00 / 08 00 00 00 / a7 00 00 00 / 08 00 00 00 / 18 01 00 00 / 08 00 00 00 / a8 00 00 00```

Which is interpreted as:

```c
cmd_getArray(((global)int *)giVar167, ((global)int *)giVar280, ((global)int *)giVar168)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883b350(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  float *pfVar3;
  uint uVar4;
  uint uVar5;
  undefined4 uVar6;
  float *pfVar7;
  float fVar8;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  uVar4 = Pac_Get_ParamType(param_2,1);
  uVar5 = Pac_Get_ParamType(param_2,2);
  uVar6 = Get_Array_BaseAddr(param_2);
  pfVar7 = (float *)FUN_089fee24(uVar6,*puVar2,*puVar1);
  if ((uVar5 & 0x70) == 0) {
    if ((uVar4 & 0x70) == 0) {
      fVar8 = *pfVar7;
    }
    else {
      fVar8 = (float)(int)*pfVar7;
    }
    *pfVar3 = fVar8;
  }
  else {
    if ((uVar4 & 0x70) == 0) {
      fVar8 = (float)(int)*pfVar7;
    }
    else {
      fVar8 = *pfVar7;
    }
    *pfVar3 = fVar8;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

