# effectkill

Deletes an effect with given [kill ID](./effectsetdeleteid.md).

## Code Information

- **Name**: `effectkill`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 12 00`
- **Assembly Address in Memory** : `0x894207c`

## Parameters

- `(int)kill_id` *(8 bytes)* : Unique ID given for effect deleting, set by [effectSetDeleteId](./effectsetdeleteid.md).
- `(int)Var1` *(8 bytes)* : -1 instakills the effect. **Can keep 0**.

## Example

Here is one example in hex:

```25 19 12 00 / 02 00 00 00 / 69 b6 01 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
effectkill((int)112233, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894207c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  FUN_088ad0b0(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x128),*puVar1,*puVar2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

